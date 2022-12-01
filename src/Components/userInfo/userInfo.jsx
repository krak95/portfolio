
function UserInfo(){
const uname = localStorage.getItem('uname')
    return (
<>
<p>{uname}</p>
</>
    )
}

export default UserInfo