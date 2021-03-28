import React from 'react';

const Navbar = (props) => {
    return(
        <div style={styles.nav} >
            <div style={styles.cartIconContainer} >
                <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1614764291~hmac=65e2acb2d2126959f4365caf9e52d03d" alt="Cart-Icon" />
                <div style={styles.cartCount}>{props.count}</div>
            </div>
        </div>
    )
}



export default Navbar;


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };