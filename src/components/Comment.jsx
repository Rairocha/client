import { get, post } from "../services/authService"
import { useEffect,useState } from "react"
import { Input, Button,Form} from "antd";

import IndividualComment from "./IndividualComment";


const Comment=({polId,comments, setComment})=>{
    
    const [activeInput, setActiveInput] = useState(false)
    const [form] = Form.useForm();

    const updateComments=()=>{
        
        get(`/comment/${polId}`)
        .then((response) => {    
            setComment(response.data)
        })
        .catch((err) => {
                console.log(err)
            })
    }

    const handleClick=()=>{
        if(activeInput){setActiveInput(false)}
        else{setActiveInput(true)}

    }


    const handleClickComment= async (e)=>{
        try {
            await form.validateFields()
            await post(`/comment/create/${polId}`,e)
            await  updateComments()
            form.resetFields()
        } catch (error) {
            console.log(error)
        }


    }
    
    useEffect(()=>{
        updateComments()
    },[polId])

    
    return(
        <div id='comments'>
            <h1>Comments</h1>
    
            <Button onClick={handleClick} className="make-comment" type="primary" htmlType="submit">Make Comment</Button>
            <br/>
            <br/>
            <Form form={form} onFinish={handleClickComment}>
            <Form.Item  name="text" rules={[{ required: true, message: "Please enter your comment" }]}>
            {activeInput&&<Input.TextArea  style={{width: '40vw',height:'20vh'}}/>}
            </Form.Item>
            {activeInput&&<Button type="primary" htmlType="submit">Submit comment </Button>}  
            </Form>
            
            {comments.map((c)=>{
                return (
                <IndividualComment c={c} polId={polId} setComment={setComment}/>
                )
            })}
        </div>
    )

}
 
export default Comment;