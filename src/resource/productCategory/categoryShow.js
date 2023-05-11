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

const ChangesForm = (props) => {
    const {data} = props;
    const { id } = useParams();
    const translate = useTranslate();
    let newProductPrice = [];
    let productObj = [];
    const getCategoryById = (values) =>{
        if(values){
            values.map((product)=>{
                if(product.productCategory){
                    product.productCategory.map((cat)=>{
                        if(cat._id === id){
                            productObj.push(product)
                        }

                    })
                }
            })
            
        }  
    }
    const getProducts = async (numberOfProduct,numberOfType) =>{
        // Block.circle('.'+props.model);
        await API.get(`/product/${numberOfType}/${numberOfProduct}?_order=DESC`).then(({ data = {} }) => {
              getCategoryById(data);
                // Block.remove('.'+props.model);
              });
    }
    let numberOfType = 0;
    let numberOfProduct = 100;
    const  save = async (prices) => {
        if(productObj.length !== 0){
            console.log('Run',numberOfProduct);
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



    const update = () =>{
        
    }
    return (
        <SimpleForm onSubmit={save}>
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

        </SimpleForm>
    );
};


export const categoryShow = (props) => {
    const translate = useTranslate();
    const { id } = useParams();
    const [category,setCategory] = useState({});
    const [products,setProducts] = useState([]);
    let productObj = [];
  
    const getCategoryById = (values) =>{
        if(values){
            values.map((product)=>{
                if(product.productCategory){
                    product.productCategory.map((cat)=>{
                        if(cat._id === id){
                            productObj.push(product)
                        }

                    })
                }
            })
            
        }  
        setProducts(productObj)  
    }
    const getProducts = async () =>{
        // Block.circle('.'+props.model);
        await API.get("/product/0/100?_order=DESC").then(({ data = {} }) => {
              getCategoryById(data);
                // Block.remove('.'+props.model);
              });
    }
    useEffect(()=>{
        getProducts();
    },[])
console.log();
    return (
        [<Create {...props}>
            <ChangesForm data={products}/>
        </Create>,
    //    <List resource={'product'} >
    <Card className={"width1000"} style={{marginTop:'20px'}}>
    <CardHeader title={'محصولات این دسته بندی'}/>
    <CardContent>
      <div style={{ height: "auto"}} className={"order-chart"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>محصول</TableCell>
                <TableCell align="right">قیمت</TableCell>
                {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
                {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                products && (
                    products.map((row,index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.title.fa}
                        </TableCell>
                        <TableCell align="right">
                            <PriceFiled product={row} key={index}/>
                        </TableCell>
                        
                      </TableRow>
                    ))
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </CardContent>
  </Card>
    //    </List>
               
            ]
    );
}
const PriceFiled = (props) =>{
    const {product} = props;

                                           let tt = 'نا موجود', thecl = 'erro';
                                           if (product.type == 'variable') {

                                               if (product.combinations) {
                                                   product.combinations.map((comb, key) => {
                                                       if (comb.in_stock == true) {
                                                           tt = 'موجود';
                                                           thecl = 'succ';
                                                       }
                                                   });
                                                   return (
                                                       <div className='stockandprice'>

                                                           <div className='theDate hoverparent'>
                                                               <Chip className={thecl} label={tt}></Chip>
                                                               <div className='theDate thehover'>
                                                                   {product.combinations.map((comb, key) => {
                                                                       return (
                                                                           <div className={'cobm flex-d cobm' + key} key={key}>
                                                                               <div className={'flex-1'}>
                                                                                   {comb.options && <div
                                                                                       className={''}>{Object.keys(comb.options).map((item, index) => {
                                                                                       return <div
                                                                                           key={index}>{(item) + " : " + comb.options[item] + "\n"}</div>;

                                                                                   })}</div>}
                                                                               </div>
                                                                               <div className={'flex-1'}>

                                                                                   {comb.price &&
                                                                                   <div className={'FDFD'}>
                                                                                       <span>قیمت:</span><span>{comb.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                                                   </div>}
                                                                               </div>
                                                                               <div className={'flex-1'}>

                                                                                   {comb.salePrice &&
                                                                                   <div className={'vfdsf'}>
                                                                                       <span>قیمت تخفیف خورده:</span><span>{comb.salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                                                   </div>}
                                                                               </div>
                                                                               <div className={'flex-1'}>

                                                                                   {/*{comb.in_stock &&*/}
                                                                                   {/*<div className={''}>*/}
                                                                                   {/*<span>{(comb.in_stock == true ? 'موجود' : 'نا موجود')}</span>*/}
                                                                                   {/*</div>}*/}
                                                                               </div>
                                                                               <div className={'flex-1'}>

                                                                                   {/*{comb.quantity &&*/}
                                                                                   {/*<div className={''}>*/}
                                                                                   {/*<span>{comb.quantity}</span>*/}
                                                                                   {/*</div>}*/}
                                                                               </div>
                                                                           </div>);
                                                                   })}
                                                               </div>
                                                           </div>
                                                       </div>
                                                   );

                                               }

                                           } else {
                                               if (product.in_stock == true) {
                                                   tt = 'موجود';
                                                   thecl = 'succ';
                                               }
                                               return (<div className={'cobm flex-d cobm'}>
                                                   <div className={'flex-1'}>
                                                       <span>قیمت:</span><span>{product.price && product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                   </div>
                                                   <div className={'flex-1'}>
                                                       <span>با تخفیف:</span><span>{product.salePrice && product.salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                   </div>
                                                   <div className={'flex-1'}>
                                                       <span>انبار:</span><span><Chip className={thecl}
                                                                                      label={tt}></Chip></span>
                                                   </div>
                                                   <div className={'flex-1'}>
                                                       <span>تعداد:</span><span>{product.quantity}</span>
                                                   </div>
                                               </div>)

                                           }

   
}
export default categoryShow;
