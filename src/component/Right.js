import React, { useState, useEffect } from 'react';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

function Right(props){
    const [imgSrcArray, setImgSrcArray] = useState([0, 0, 0]);

    const nextImg = (index) => {
        setImgSrcArray((prevImgSrcArray) => {
            const updatedArray = [...prevImgSrcArray];
            updatedArray[index] = updatedArray[index]===1?0:1    
            return updatedArray;
        });
      };
    const prevImg = (index) => {
        setImgSrcArray((prevImgSrcArray) => {
            const updatedArray = [...prevImgSrcArray];
            updatedArray[index] = updatedArray[index]===0?1:0    
            return updatedArray;
        });
      };
    return(
        <>
            {   
                props.makanan.map((element,index)=>{
                    return(
                        <div key={index} className='food_list'>
                            <h1>{element.nama_makanan}</h1>
                            <div className='food_foto_container'>
                                <div className='control_left'>
                                    <FaChevronLeft className='img_control' onClick={() => prevImg(index)}/>
                                </div>
                                <img src={`./images/${element.foto[imgSrcArray[index]]}`} alt={element.nama_makanan} />
                                <div className='control_right'>
                                    <FaChevronRight className='img_control' onClick={() => nextImg(index)}/>
                                </div>
                            </div>
                            <div className='keterangan'>{element.keterangan}</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Right;