
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowPost(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<ReferenceField source="userid" reference="user" />
<ReferenceField source="pageid" reference="page" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}