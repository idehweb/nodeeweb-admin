import React from 'react';
import {useRecordContext,useTranslate,TextField} from 'react-admin';
import API from '@/functions/API';

API.defaults.headers.common['Content-Type'] = 'multipart/form-data';

export default ({base="product"}) => {
  const record = useRecordContext();
  const translate = useTranslate();

    return (
        <>
          {record.title && <a target={'_blank'} href={window.SHOP_URL+base+'/'+record._id+'/'+record.title[translate('lan')]}><TextField source={"title."+translate('lan')} label={translate('pos.title')} sortable={false}/></a>}
        </>
    );

};
