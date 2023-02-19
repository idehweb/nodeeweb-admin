import {
  BooleanField,
  ChipField,
  Datagrid,
  downloadCSV,
  EditButton,
  EmailField,
  ExportButton,
  Filter,
  FunctionField,
  NumberField,
  Pagination,
  ReferenceArrayField,
  ShowButton,
  SingleFieldList,
  TextField,
  TextInput,
  TopToolbar,
  useTranslate
} from "react-admin";
import { dateFormat } from "@/functions";
import { List, SimpleForm } from "@/components";
import { ImportButton } from "react-admin-import-csv";
import API, { BASE_URL } from "@/functions/API";

const PostFilter = (props) => {
  const translate = useTranslate();

  return (
    [<Filter {...props}>
      <TextInput label={translate("resources.customers.firstName")} source="firstName" alwaysOn/>
      <TextInput label={translate("resources.customers.lastName")} source="lastName" alwaysOn/>
      <TextInput label={translate("resources.customers.phoneNumber")} source="phoneNumber" alwaysOn/>

    </Filter>
    ]
  );
};

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;
const exporter = posts => {
  console.clear();
  let allpros = [];
  const postsForExport = posts.map(post => {
    const { backlinks, author, ...postForExport } = post; // omit backlinks and author

    postForExport._id = post._id; // add a field
    // console.log(post.title)

    if (post.title)
      postForExport.title = post.title.fa; // add a field
    postForExport.type = post.type; // add a field
    if (post.firstCategory) {
      //     postForExport.firstCategory = post.firstCategory._id; // add a field
      //     postForExport.firstCategory = post.firstCategory.name.fa; // add a field
      // delete post.firstCategory;
    }
    if (post.secondCategory) {
      // postForExport.secondCategory = post.secondCategory._id; // add a field
      postForExport.secondCategory = post.secondCategory.name.fa; // add a field
      delete post.secondCategory;

    }
    if (post.thirdCategory) {

      // postForExport.thirdCategory = post.thirdCategory._id; // add a field
      postForExport.thirdCategory = post.thirdCategory.name.fa; // add a field
      delete post.thirdCategory;

    }
    // postForExport.combinations = post.combinations; // add a field
    if (post.type == "variable") {
      // postForExport.price=[];
      // postForExport.salePrice=[];
      // postForExport.in_stock=[];
      // postForExport.quantity=[];
      // allpros.pop();
      post.combinations.map((com, i) => {
        allpros.push({
          _id: post._id,
          title: postForExport.title,
          price: com.price,
          salePrice: com.salePrice,
          in_stock: com.in_stock,
          quantity: com.quantity,
          type: post.type,
          views: post.views.length,
          options: com.options ? Object.values(com.options).toString() : "",
          combination_id: (i + 1),
          firstCategory: post.firstCategory.name.fa || ""
        });
        // delete postForExport.combinations[i].id;
        // delete postForExport.combinations[i]['id'];
        // delete postForExport.combinations[i].product_id;
        // delete postForExport.combinations[i].inventory_status;
        // delete postForExport.combinations[i].oversell;
        // delete postForExport.combinations[i].sku;
        // delete postForExport.combinations[i].barcode;
        // delete postForExport.combinations[i].weight;
        // delete postForExport.combinations[i].visible;
        // delete postForExport.combinations[i].optionsId;
        // delete postForExport.combinations[i].sale_type;
        // delete postForExport.combinations[i].sale_price;
        // delete postForExport.combinations[i].sale_amount;
        // delete postForExport.combinations[i].scheduled_discount_start;
        // delete postForExport.combinations[i].scheduled_discount_start_utc;


      });
    } else if (post.type == "normal") {
      allpros.push({
        _id: post._id,
        title: postForExport.title,
        price: post.price,
        salePrice: post.salePrice,
        in_stock: post.in_stock,
        quantity: post.quantity,
        type: post.type,
        views: post.views.length,
        firstCategory: post.firstCategory.name.fa || ""


      });
    }
    delete postForExport.active;
    delete postForExport.countries;
    delete postForExport.categories;
    delete postForExport.catChoosed;
    delete postForExport.addToCard;
    delete postForExport.countryChoosed;
    delete postForExport.gtin;
    delete postForExport.getContactData;
    delete postForExport.mainCountryList;
    delete postForExport.views;
    delete postForExport.transaction;
    delete postForExport.t;
    delete postForExport.mainList;
    // delete postForExport.firstCategory;
    delete postForExport.options;
    // delete postForExport.secondCategory;
    // delete postForExport.thirdCategory;
    delete postForExport.updatedAt;
    delete postForExport.createdAt;
    delete postForExport.thumbnail;
    delete postForExport.status;
    delete postForExport.title;
    delete postForExport.combinations;
    delete postForExport.id;
    return postForExport;
  });
  console.log("postsForExport", allpros);
  jsonExport(allpros, {
    headers: ["_id", "title", "type", "price", "salePrice", "in_stock", "quantity", "firstCategory"] // order fields in the export
  }, (err, csv) => {
    console.log("ForExport", allpros);
    const BOM = "\uFEFF";
    downloadCSV(`${BOM} ${csv}`, "posts"); // download as 'posts.csv` file
  });
};

const ListActions = (props) => {
  // All configuration options are optional
  const config = {
    // Enable logging
    logging: true,
    // Disable "import new" button
    // disableImportNew: false,
    // Disable "import overwrite" button
    // disableImportOverwrite: false,
    // // A function to translate the CSV rows on import
    // preCommitCallback?: (action: "create" | "overwrite", values: any[]) => Promise<any[]>;
    // // A function to handle row errors after import
    // postCommitCallback?: (error: any) => void;
    // Transform rows before anything is sent to dataprovider
    transformRows: (csvRows) => {
      console.log("csvRows", csvRows);
      // let update = [], create = [];
      let array = [];
      let postsForExport = [];
      if (csvRows)
        postsForExport = csvRows.map(row => {
          // console.log("row", row);

          row._id = row[" _id"];
          if (row._id)
            array.push({
              _id: row._id
            });
          if (!row.phoneNumber)
            row.phoneNumber = row.phoneNumber2;

          if (row.phoneNumber && row.phoneNumber.toString().length < 12) {
            if (row.phoneNumber.toString().length === 10) {
              row.phoneNumber = "98" + row.phoneNumber.toString();
            }
          }
          // else
          // delete row.photos;
          delete row[" _id"];
          delete row["id"];
          // row.title = {
          //   en: row.title_en,
          //   fa: row.title_fa,
          //   ru: row.title_ru,
          //   uz: row.title_uz
          // };
          delete row.title_en;
          delete row.title_ru;
          delete row.title_uz;
          delete row.createdAt;
          delete row.updatedAt;
          // if (row._id) {
          //     update.push(row);
          // } else {
          //     create.push(row);
          // }
          // if()

          return row;
        });
      // console.log("ForImport", postsForExport);
      API.post("/customer/import", JSON.stringify(postsForExport))
        .then(({ data = {} }) => {
          const refresh = useRefresh();
          refresh();
          alert("it is ok");
          // window.location.reload();
          // if (data.success) {
          //   values = [];
          //   valuess = [];
          // }
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
    validateRow: async (row) => {
      console.log("row", row);
      if (row.id) {
        // throw new Error("AAAA");
      }
    },
    postCommitCallback: reportItems => {
      console.log("reportItems", { reportItems });
    },
    // Async function to Validate a row, reject the promise if it's not valid
    parseConfig: {
      dynamicTyping: true
      // complete: function(results, file) {
      //     console.log("Parsing complete:", results, file);
      // },
      // preview:1
    }
  };
  return (
    <TopToolbar>
      <ExportButton maxResults={10000000}/>
      <ImportButton {...props} {...config} />
    </TopToolbar>
  );
};
export const customerList = (props) => {
  const translate = useTranslate();
  return (
    <List
      {...props}
      filters={<PostFilter/>} pagination={<PostPagination/>} actions={<ListActions/>}>
      <Datagrid>
        <NumberField source="phoneNumber" label={translate("resources.customers.phoneNumber")}/>
        <TextField source="activationCode" label={translate("resources.customers.activationCode")}/>
        <TextField source="firstName" label={translate("resources.customers.firstName")}/>
        <TextField source="lastName" label={translate("resources.customers.lastName")}/>
        <EmailField source="email" label={translate("resources.customers.email")}/>
        <TextField source="internationalCode" label={translate("resources.customers.internationalCode")}/>
        <TextField source="source" label={translate("resources.customers.source")}/>
        <ReferenceArrayField label={translate("resources.customers.customerGroup")} reference="customerGroup"
                             source="customerGroup">
          <SingleFieldList>
            <ChipField source="slug"/>
          </SingleFieldList>
        </ReferenceArrayField>
        {/*<FunctionField label={translate("resources.customer.customerGroup")}*/}
        {/*render={record => {*/}


        {/*return (*/}
        {/*<div className={"categories"}>*/}
        {/*{record.customerGroup && record.customerGroup.map((item, it) => <div>*/}
        {/*<ChipField source={"customerGroup[" + it + "].slug"} label={item.slug}*/}
        {/*sortable={false}/>*/}
        {/*</div>)}*/}

        {/*</div>*/}
        {/*);*/}
        {/*}}/>*/}
        <FunctionField label={translate("resources.customers.date")}
                       render={record => {

                         return (
                           <div className='theDate'>
                             <div>
                               {translate("resources.customers.createdAt") + ": " + `${dateFormat(record.createdAt)}`}
                             </div>
                             <div>
                               {translate("resources.customers.updatedAt") + ": " + `${dateFormat(record.updatedAt)}`}
                             </div>

                             {Boolean(record.orderCount) && <div>
                               {translate("resources.customers.orderCount") + ": " + `${(record.orderCount)}`}
                             </div>}
                           </div>
                         );
                       }}/>

        <BooleanField source="active" label={translate("resources.customers.active")}/>
        <FunctionField label={translate("resources.product.edit")}
                       render={record => (
                         <>
                           <EditButton/>
                           <ShowButton/>

                         </>
                       )}/>

      </Datagrid>
    </List>
  );
};


export default customerList;
