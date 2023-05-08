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
    useResourceContext, useTranslate,useGetList,ListContextProvider,useList
} from 'react-admin';
import React, {Fragment} from 'react';
import {useParams} from 'react-router';
import {CategoryRounded as Icon, LibraryAdd} from '@mui/icons-material';
import {CustomResetViewsButton, List, SimpleForm} from '@/components';
import useStyles from '@/styles';
import {Val} from '@/Utils';
import API, {BASE_URL} from '@/functions/API';
import {Chip} from '@mui/material';

var theID = null;
const ResourceName = () => {
    const {resource} = useResourceContext();
    return <>{resource}</>;
}
const PostFilter = (props) => {
    const translate = useTranslate();

    return (
        <Filter {...props}>
            {/*<TextInput label="Search" source="search" alwaysOn/>*/}
            <SearchInput source="Search" placeholder={translate('resources.category.name')} alwaysOn/>
            {/*<SearchInput source="firstCategory" placeholder={'نام'} alwaysOn/>*/}
            {/*<SearchInput source="lastName" placeholder={'نام خانوادگی'} alwaysOn/>*/}
            {/*<SelectInput source="firstCategory" label={'دسته بندی اول'}  emptyValue={null} choices={typeChoices4}/>*/}
            {/*<SelectInput source="secondCategory" label={'دسته بندی دوم'}  emptyValue={null} choices={typeChoices3}/>*/}
            {/*<SelectInput source="thirdCategory" label={'دسته بندی سوم'}  emptyValue={null} choices={typeChoices3}/>*/}

        </Filter>
    );
}
const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100, 200, 500]} {...props} />;




function save(record) {
    console.log('save', record, theID);

    // if (record.plusx) {
    let type = null, number = 0;
    if (record.plusx) {
        type = 'plusx';
        number = record.plusx;
    }
    if (record.minusx) {
        type = 'minusx';
        number = record.minusx;

    }
    if (record.plusxp) {
        type = 'plusxp';
        number = record.plusxp;

    }
    if (record.minusxp) {
        type = 'minusxp';
        number = record.minusxp;

    }
    if (theID)
        API.put('/product/modifyPriceByCat/' + theID, JSON.stringify({type: type, number: number}))
            .then(({data = {}}) => {
                // const refresh = useRefresh();
                // refresh();
                alert('it is ok');
                window.location.reload();
                // if (data.success) {
                //     values = [];
                //     valuess = [];
                // }
            })
            .catch((err) => {
                console.log('error', err);
            });
    // }

    // return 0;
}

const ChangesForm = ({children, ...rest}) => {
    const cls = useStyles();
    const translate = useTranslate();

    return (
        <SimpleForm {...rest} onSubmit={save}>
            {children}
            <NumberInput
                min={0}
                source="plusx"
                label={translate("resources.category.addxpercent")}
            />
            <NumberInput
                min={0}
                source="minusx"
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



const PostBulkActionButtons = props => (
    <Fragment>
        
        {/*<ResetViewsButton label="Reset Views" {...props} />*/}
        {/* default bulk delete action */}
        <CustomResetViewsButton {...props} />
    </Fragment>
);

export const categoryShow = (props) => {
    const { id } = useParams();
    let productObj = [];
    const { data } = useGetList(
        'product',
        { 
            pagination: { page: 1, perPage: 100 },
        }
    );
    if(data){
        data.map((product)=>{
            if(product.productCategory){
                product.productCategory.map((cat)=>{
                    if(cat._id === id){
                        productObj.push(product)
                    }
                })
            }
        })
        
    }    
    console.log('productproductproduct',productObj);
    return (
        [<Create {...props}>
            <ChangesForm/>
        </Create>,
    //    <List resource={'product'} >
           <Datagrid source={productObj}>
               <TextField source="title.fa" />
           </Datagrid>
    //    </List>
               
            ]
    );
}
export default categoryShow;
