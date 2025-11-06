
export function AuthPage({isSignin}: {
    isSignin:boolean
}) 
{
    return <div
    className="w-screen h-screen flex justify-center items-center">
    <div className="p-6 m-2 bg-white rounded text-black">
        <div className="p-2 m-2" >
            <input type="type" placeholder="Email" />
        </div>

        <div className="p-2 m-2 ">
        <input placeholder="Password" type="password" />
        </div>

  <div className="p-2 ">
        <button className="bg-red-400" onClick={() =>{
    
        }} >{isSignin ? "Sign in ": "Sign up "}</button>
    </div> 
    </div>

    </div>
}