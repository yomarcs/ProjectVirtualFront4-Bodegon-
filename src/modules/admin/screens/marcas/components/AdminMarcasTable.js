import React from 'react'

const AdminMarcasTable = () => {
    return (
        <section className="row mt-5">
            {/* Tabla */}
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Descripción</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="tbody-marcas"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminMarcasTable
