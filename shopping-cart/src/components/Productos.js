import { Component } from 'react'
import Producto from './Producto'

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props//define cons con las props

        return(
            <div style={styles.productos}>
                { productos.map(producto =>//aqui toma la lista y separa los obj
                    <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    producto={producto}//aqui le pasa la propiedad existente a la clase
                    />)}
            </div>
        )
    }
}

export default Productos;