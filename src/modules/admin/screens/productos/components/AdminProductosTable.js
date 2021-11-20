import React from 'react'

const AdminProductosTable = () => {
    return (
        <section className="row mt-5">
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Descripción</th>
                                    <th>imagen</th>
                                    <th>Categoria</th>
                                    <th>Tipo</th>
                                    <th>Marca</th>
                                    <th>Stock</th>
                                    <th>Precio</th>
                                    <th>P.promo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="tbodyProductos"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminProductosTable
 
