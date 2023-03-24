import React from 'react'

export const Table = ({ coins }) => {

    return (
        <table className='mx-auto mb-24 shadow-2xl'>
            <thead>
                <tr className='uppercase '>
                    <td >
                        Nombre
                    </td>
                    <td>
                        Símbolo
                    </td>
                    <td>
                        Imagen
                    </td>
                    <td>
                        Precio
                    </td>
                </tr>
            </thead>

            <tbody>
                {coins.map(coin => (
                    <>
                        <tr coin={coin}>
                            <td>{coin.name}</td>
                            <td className='uppercase'>{coin.symbol}</td>
                            <td className='flex justify-center'><img className='w-12' src={coin.image} /></td>
                            <td>{coin.current_price}</td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    )
}
