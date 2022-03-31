import Color from "./Color/Color"
import TextParam from "./TextParam/TextParam";

const Attributes = ({ attributes, onClickAddType }) => {

    let textAttribut = attributes.filter((element) => element.type === "text");
    
    let textSwatch = attributes.filter((element) => element.type === "swatch");

    return (
        <div>
            {textAttribut[0] ? <TextParam textParam={textAttribut[0]} /> : null}
            {textAttribut[1] ? <TextParam textParam={textAttribut[1]} /> : null}
            {textAttribut[2] ? <TextParam textParam={textAttribut[2]} /> : null}
            {textAttribut[3] ? <TextParam textParam={textAttribut[3]} /> : null}
            {textSwatch[0] ? <Color color={textSwatch[0]} /> : null}
        </div>
    );
};

export default Attributes;
