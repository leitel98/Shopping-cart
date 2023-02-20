import {Component} from 'react'

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '1200px',
    }
}

class Layout extends Component {
    render() {
        return (
            //centrar el copntenido el div de mas afuera y darle el ancho mas adentro
            <div style={styles.layout}> 
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;