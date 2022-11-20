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
    useResourceContext, useTranslate
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


const Form = ({children, ...rest}) => {
    const cls = useStyles();
    const translate = useTranslate();

    return (
        <SimpleForm {...rest}>
            {children}
            <TextInput
                source={"name."+translate('lan')}
                label={translate('resources.category.name')}
                validate={Val.req}
                formClassName={cls.f2}
                fullWidth
            />
            <TextInput
                source="slug"
                label={translate('resources.category.slug')}
                validate={Val.req}
                formClassName={cls.f2}
                fullWidth
            />
            <ReferenceInput
                label={translate('resources.category.parent')}
                source="parent"
                reference="productCategory"

                perPage={1000}
                formClassName={cls.f2}>
                <SelectInput optionText={"name."+translate('lan')} optionValue="id"/>
            </ReferenceInput>
            {/*<NumberInput*/}
                {/*source="order"*/}
                {/*label={translate('resources.category.order')}*/}
                {/*fullWidth*/}
            {/*/>*/}
        </SimpleForm>
    );
};

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



const create = (props) => (
    <Create {...props}>
        <Form/>
    </Create>
);

export default create;
