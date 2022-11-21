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
const ResourceName = () => {
    const {resource} = useResourceContext();
    return <>{resource}</>;
}


const Form = ({children, ...rest}) => {
    const cls = useStyles();
    const translate = useTranslate();

    return (
        <SimpleForm {...rest}>
            {children}
            <TextInput
                source={"name."+translate('lan')}
                label={translate('resources.discount.name')}
                validate={Val.req}
                formClassName={cls.f2}
                fullWidth
            />
            <TextInput
                source="slug"
                label={translate('resources.discount.slug')}
                validate={Val.req}
                formClassName={cls.f2}
                fullWidth
            />
          <NumberInput
            source="percent"
            label={translate('resources.discount.percent')}
            formClassName={cls.f2}
            fullWidth
          />
          <NumberInput
            source="price"
            label={translate('resources.discount.price')}
            formClassName={cls.f2}
            fullWidth
          />
          <NumberInput
            source="count"
            label={translate('resources.discount.count')}
            formClassName={cls.f2}
            fullWidth
          />
        </SimpleForm>
    );
};



const edit = (props) => (
    <Edit {...props}>
        <Form/>
    </Edit>
);

const PostBulkActionButtons = props => (
    <Fragment>
        {/*<ResetViewsButton label="Reset Views" {...props} />*/}
        {/* default bulk delete action */}
        <CustomResetViewsButton {...props} />
    </Fragment>
);

export default edit;
