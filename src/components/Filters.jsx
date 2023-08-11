

import { Select,Form} from 'antd';
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
        <div id='filters' >
        
        <Form layout={'vertical'} >
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
        <Form.Item label="Gender:" name="gender" >
        <Select onChange = {(e)=>{{setFilterValues({...filterValues,"gender": e })}}} defaultValue={'All'} style={{
        width: 120, }} options={[
        {
          value: 'M',
          label: 'Male',
        },
        {
          value: 'F',
          label: 'Female',
        },
        {
          value: 'all',
          label: 'All',
        },]}/>
        
        </Form.Item>
        <Form.Item label="Title:" name="title" >
        <Select onChange = {(e)=>{{setFilterValues({...filterValues,"short_title": e })}}} defaultValue={'All'} style={{
        width: 120, }} options={[
        {
          value: 'Rep.',
          label: 'Representative',
        },
        {
          value: 'Sen.',
          label: 'Senator',
        },
        {
          value: 'all',
          label: 'All',
        },]}/>
        
        </Form.Item>
        </Form>
        
        </div>}
    </div>

  );
};

export default Filters;