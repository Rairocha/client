

import { Divider, Input, Select,Form,Row , Column} from 'antd';
import { useState } from "react"

const Filters = ({ filterValues, setFilterValues}) => {
    const [filterBool, setFilterBool] = useState(false);

      const activateFilters = ()=>{
        if (filterBool){
          setFilterBool(false)
        }
        else{
          setFilterBool(true)
        }
      }
  return (
    <div>
        {filterBool&&<button onClick={()=>{activateFilters()}}>Hide Filters</button>}
        {!filterBool&&<button onClick={()=>{activateFilters()}}>Show Filters</button>}
        {filterBool&&
        <div id='filters'>
        
        <Form layout={'vertical'}>
        <Space wrap>
        <Form.Item label="In office:" name="in_office" >
        <Select onChange = {(e)=>{
          {setFilterValues({...filterValues,"in_office": e })}
         
        }}  defaultValue={'All'} style={{
        width: 120, }} options={[
        {
          value: true,
          label: 'In office',
        },
        {
          value: false,
          label: 'Out of office',
        },
        {
          value: 'all',
          label: 'All',
        },]}/>

        </Form.Item>
        <Form.Item label="Party:" name="party" >
        <Select onChange = {(e)=>{{setFilterValues({...filterValues,"party": e })}}} defaultValue={'All'} style={{
        width: 120, }} options={[
        {
          value: 'R',
          label: 'Republican',
        },
        {
          value: 'D',
          label: 'Democrat',
        },
        {
          value: 'all',
          label: 'All',
        },]}/>
        
        </Form.Item>
        </Space>
        </Form>
        
        </div>}
    </div>

  );
};

export default Filters;