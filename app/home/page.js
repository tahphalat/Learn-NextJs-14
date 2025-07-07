import { SubmitData } from "./submitData";
export default function Home(){
    return(
        <>
            <div>This is Home</div>

            <form action={SubmitData}>
                <div>Email</div>
                <input name="email"/>
                <button>Submit</button>
            </form>
        </>
    );
}