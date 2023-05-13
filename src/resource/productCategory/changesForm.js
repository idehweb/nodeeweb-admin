import {
    BulkDeleteButton,
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    Filter,
    FunctionField,
    NumberInput,
    Pagination,
    ReferenceField,
    ReferenceInput,
    ResourceContextProvider,
    SearchInput,
    SelectInput,
    Show,
    ShowButton,
    SimpleShowLayout,
    TextField,
    TextInput,
    useResourceContext, useTranslate,useGetList,ListContextProvider,useList,useGetOne
} from 'react-admin';
import { Card, CardContent, CardHeader } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Block } from 'notiflix/build/notiflix-block-aio';
import React, {Fragment,useState,useEffect} from 'react';
import {useParams} from 'react-router';
import {CategoryRounded as Icon, LibraryAdd} from '@mui/icons-material';
import {CustomResetViewsButton, List, SimpleForm} from '@/components';
import useStyles from '@/styles';
import {Val} from '@/Utils';
import API, {BASE_URL} from '@/functions/API';
import {Chip} from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
export const ChangesForm = (props) => {
    const [pro,setPro] = useState('')
    const [progress,setProgress] = useState(0)
    const { id } = useParams();
    const {data} = props;
    let newProductPrice = [];
    const translate = useTranslate();
    
    const  save = async (prices) => {
        if(productObj.length !== 0){
            productObj.map((product,ip)=>{
                if(product.combinations){
                    product.combinations.map((combinition,ic)=>{
                        if(combinition){
                            if(combinition.price){
                                    if(prices.plusPercent){
                                       let percentPlus = combinition.price + (1/100) * prices.plusPercent * combinition.price;
                                       combinition.price = percentPlus;
                                    }
                                    if(prices.minusPercent){
                                        let percentMinim = combinition.price - (1/100) * prices.plusPercent * combinition.price;
                                        combinition.price = percentMinim;
                                    }
                                    if(prices.plusxp){
                                        combinition.price +=  prices.plusxp
                                    }
                                    if(prices.minusxp){
                                        combinition.price +=  prices.minusxp
                                    }
                            }
                            if(combinition.salePrice){

                            }
                        }
                    })
                    
                }
                newProductPrice.push(product)
            })
            numberOfProduct+=99;
            numberOfType+=99;
            productObj = [];
            console.log('numberOfProduct',numberOfProduct);
            console.log('numberOfType',numberOfType);
        }else{
            console.log('getproduct');
            await getProducts(numberOfProduct,numberOfType);
        }
    }


    const delay = async (ms = 1000) =>{
        new Promise(resolve => setTimeout(resolve, ms))
        // Block.remove('.pID-'+id);
    }
    const updateProduct=async (i,product,prices)=>{
        Block.arrows('.pID-'+product._id);
        
         setTimeout(function() {
            setProgress(i)
            if(product.combinations){
                product.combinations.map((combinition,ic)=>{
                    if(combinition){
                        if(combinition.price){
                            
                                if(prices.plusPercent){
                                let percentPlus = combinition.price + (1/100) * prices.plusPercent * combinition.price;
                                combinition.price = percentPlus;
                                }
                                if(prices.minusPercent){
                                    let percentMinim = combinition.price - (1/100) * prices.plusPercent * combinition.price;
                                    combinition.price = percentMinim;
                                }
                                if(prices.plusxp){
                                    combinition.price +=  prices.plusxp
                                }
                                if(prices.minusxp){
                                    combinition.price +=  prices.minusxp
                                }
                        }
                        if(combinition.salePrice){

                        }
                    }
                })
                
            }
            newProductPrice.push(product)
            setPro(product.title.fa)
            Block.remove('.pID-'+product._id);
        }, 1000 * i );
    }
    const update = async (prices) =>{
        if(data.length !== 0){
            data.forEach(function (product, index) {
               
                    updateProduct(index,product,prices)
                
            });
        }
    }



    return (
        <SimpleForm onSubmit={update}>
            <NumberInput
                min={0}
                source="plusPercent"
                label={translate("resources.category.addxpercent")}
            />
            <NumberInput
                min={0}
                source="minusPercent"
                label={translate("resources.category.minusxpercent")}
            />
            <NumberInput
                min={0}
                source="plusxp"
                label={translate("resources.category.addxprice")}
            />
            <NumberInput
                min={0}
                source="minusxp"
                label={translate("resources.category.minusxprice")}
            />
            <div style={{width:'100%'}}>
            {progress > 0 && (
                    <LinearProgress variant="determinate" value={progress} />
                )}
            </div>
            <span>
                
                {
                pro && (
                    <>
                    
                    {pro}
                    </>
                    
                )
                }</span>

        </SimpleForm>
    );
};
export default React.memo(ChangesForm)