import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from "./NavigationMenu";
import { useTransition, animated } from 'react-spring'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  
  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  })


  // let menu
  // let menuMask

  // if (showMenu) {
  //   menu =
  //     <div
  //       className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow px-3">
  //       <NavigationMenu
  //         closeMenu={() => setShowMenu(false)}
  //       />
  //     </div>
    
  //   menuMask =
  //     <div
  //       className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
  //       onClick={() => setShowMenu(false)}>
  //     </div>
  // }

  return (
    <>
      <nav>
        <span className="text-xl">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>

        {
          maskTransitions.map(({ item, key, props }) =>  
            item &&
            <animated.div
              key={key}
              style={props}
              className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
              onClick={() => setShowMenu(false)}
            >
            </animated.div> 
          )
        }

        {
          menuTransitions.map(({ item, key, props }) =>  
            item && <animated.div key={key} style={props} className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow px-3">
              <NavigationMenu
                closeMenu={() => setShowMenu(false)}
              />
            </animated.div> 
          )
        }
      </nav>
    </>
  );
}

export default Navigation;