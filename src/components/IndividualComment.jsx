import {Button,Form,Input} from "antd";
import {  useContext,useState } from "react"
import { AuthContext } from "../context/auth.context";
import { get, post } from "../services/authService"

const IndividualComment=({c,polId,setComment})=>{
    const { user } = useContext(AuthContext);

    const [activeInput, setActiveInput] = useState(false)
    const [form] = Form.useForm();

    const handleClick=()=>{
        if(activeInput){setActiveInput(false)}
        else{setActiveInput(true)}

    }

  
    const updateComments=()=>{
        
        get(`/comment/${polId}`)
        .then((response) => {    
            setComment(response.data)
        })
        .catch((err) => {
                console.log(err)
            })
    }

    const handleClickDelete= async(id)=> {
        
        try {
            await post(`/comment/delete/${id}`)
            await  updateComments()
        }
        catch (error) {console.log(error)}

    }

    const handleClickEdit= async (e)=>{
            try {
                await form.validateFields()
                await post(`/comment/edit/${c._id}`,e)
                await  updateComments()
                setActiveInput(false)
            } catch (error) {
                console.log(error)
            }


    }
    return(
        <div key={c._id} className='comment-box'>
                    <div className="edit-delete-buttons">
                    {user.email==c.owner.email&&<Button onClick={()=>{handleClick(c._id)}} type="primary" style={{margin:'2%'}}>Edit</Button>}
                    {user.email==c.owner.email&&<Button onClick={()=>{handleClickDelete(c._id)}} type="primary"  style={{margin:'2%'}}>Delete</Button>}
                    </div>
                    {!activeInput&&<span><strong>{c.owner.username}</strong> made a comment: </span>}
                    {!activeInput&&<p>{c.content}</p>}
                    <Form form={form} onFinish={handleClickEdit}>
                    <Form.Item  name="text" rules={[{ required: true, message: "Please enter your comment" }]}>
                    {activeInput&&<Input.TextArea  defaultValue={c.content} style={{width: '40vw',height:'20vh'}}/>}
                    </Form.Item>
                    {activeInput&&<Button type="primary" htmlType="submit">Submit comment </Button>}  
                    </Form>
                    <hr/>
        </div>
    )
}

export default IndividualComment;