import Color from "./Color/Color"
import TextParam from "./TextParam/TextParam";

const Attributes = ({ attributes }) => {

    let textAttribut = attributes.filter((element) => element.type === "text");

    console.log('textAttribut',textAttribut)
    // let a = textAttribut.map((t) => t.items)
    // console.log('a',a)
    
    let textSwatch = attributes.filter((element) => element.type === "swatch");

    return (
        <div>
             {/* {a ? <TextParam textParam={a} /> : null} */}
             {textAttribut ? <TextParam textParam={textAttribut} /> : null}
            {/* {textAttribut[0] ? <TextParam textParam={textAttribut[0]} /> : null}
            {textAttribut[1] ? <TextParam textParam={textAttribut[1]} /> : null}
            {textAttribut[2] ? <TextParam textParam={textAttribut[2]} /> : null}
            {textAttribut[3] ? <TextParam textParam={textAttribut[3]} /> : null} */}
            {textSwatch[0] ? <Color color={textSwatch[0]} /> : null}
        </div>
    );
};

export default Attributes;
