import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function Figures({ matrix, tables }) {
    if (matrix) {
        return (
            <div className="figura">
                {matrix == undefined ? <></> :
                    matrix.map((matrix, index) => {
                        return (
                            <div className="matriz" key={`matrix-${index}`}>
                                <BlockMath math={matrix == undefined ? "carregando" : matrix}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    } else if (tables) {
        return (
            <div className="figura">
                {tables == undefined ? <></> :
                    tables.map((tables, index) => {
                        return (
                            <div className="tables" key={`tables-${index}`}>
                                <BlockMath math={tables !== undefined ? tables : null}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div className="figura"></div>
        )
    }
}

export default Figures;