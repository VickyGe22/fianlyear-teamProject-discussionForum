import GeneralComments from "./discuss-subpage/generalcomments";
import Issue from "./discuss-subpage/issuepage";


export default function Home() {

    return(
        
        <div className="text-sm text-indigo-500 font-medium hover:underline" >

            <Issue />
            <GeneralComments />
        
        </div>
    )

    
}

