import {string} from "prop-types";
import {Link} from "react-router-dom";
import {ThemeColors} from "../constants/colors";
import CoolButton from "./CoolButton";
import AddMod from "./AddMod";

const styles = {
    "container": {
        background: ThemeColors.light.main + 'C0',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '70px',
        position: 'fixed',
        top: 0,
    },

    "sticky": {
        position: 'fixed',
        top: 0
    },

    "logo": {
        display: 'flex',
        flexWrap: 'flex-start',
    },

    "header": {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
    },

    "links": {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '20px',
    },

    "link": {
        textDecoration: 'none',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        color: ThemeColors.light.foreground
    },

    "active": {
        color: ThemeColors.light.accent
    }
}

const links = [{
    label: 'Головна',
    path: '/'
}, {
    label: 'Стартапи',
    path: '/startups'
}, {
    label: 'Події',
    path: 'events'
}]

const MainHeader = (props) => {
    const linkItems = links.map(item => (
        <Link to={item.path} style={{...styles.link, ...(props.active === item.path && styles.active)}}>{item.label}</Link>
    ));
    return (
        <header>
            <div style={styles.container}>
                <div style={styles.logo}>
                    <p style={styles.header}>
                        GolTeens Lab
                    </p>
                </div>
                <div style={styles.links}>
                    {linkItems}
                </div>
                    <a href="#">
                        <CoolButton onclick='AddMod()'>Додати стартап</CoolButton>
                    </a>
            </div> 
            <script src={AddMod}></script>
        </header>  
       
    );
}

MainHeader.propTypes = {
    active: string,
}

export default MainHeader   // ИСХОД