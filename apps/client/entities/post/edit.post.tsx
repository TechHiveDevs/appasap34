
import { 
  Edit,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditPost(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    
<ReferenceInput label="page" source="pageid" reference="page">
        <AutocompleteInput variant="outlined" /* optionText="page"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}