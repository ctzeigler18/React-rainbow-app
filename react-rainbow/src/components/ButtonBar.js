export default function ButtonBar(props) {
debugger; 
const {onChangeImageId} = props;
return (
    <div>
        <button type="button" onClick={()=> onChangeImageId(-5)}>Way Back</button>
        <button type="button" onClick={()=> onChangeImageId(-1)}>Back</button>
        <button type="button" onClick={()=> onChangeImageId(1)}>Next</button>
        <button type="button" onClick={()=> onChangeImageId(5)}>Big Next</button>
    </div>
)

}