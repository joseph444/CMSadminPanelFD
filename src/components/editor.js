import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as constants from "../utils/constants"
export default function Editor({data,onChange}){
    return (
        <CKEditor 
            editor={ ClassicEditor}
            config={
                {
                    ckfinder:{
                        uploadUrl:`${constants.API_BASE_URL}/tmp/upload `
                    }
                }
            }
            data={data}
            onChange={(event,editor)=>{
                onChange(editor.getData())
            }}
        />
    );
}