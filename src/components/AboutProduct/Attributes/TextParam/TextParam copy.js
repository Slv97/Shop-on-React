import s from "../Attributes.module.css";
import useFilter from "../../../../utils/useFilter";

const TextParam = ({ textParam }) => {
    console.log("textParam", textParam);
    // let newTextParam = textParam.map((c) => (
    //     <div className={s.block} key={c.id}>{c.value}</div>
    // ));

    // let b = textParam.map((c) => (
    //     c.map((c2) => c2.value)
    // ));

    // console.log('b', b)

    // let itemsT = textParam.map((c) => (c.map((c2) => <div className={s.block} key={c2.id}>{c2.value}</div>)))

    // let itemsT = textParam.map((c) =>
    //     c.items.map((c2) => (
    //         <div className={s.block} key={c2.id}>
    //             {c2.value}
    //         </div>
    //     ))
    // );
    // console.log("itemsT", itemsT);

    // let nameT = textParam.map((n) => (
    //     <div key={n.id} className={s.parameter}>
    //         {n.name}:
    //     </div>
    // ));

    let x = textParam.filter(
        (element) => element.name.toLowerCase() === "capacity"
    );

    let capacity = useFilter(textParam, "capacity")
     let ports = useFilter(textParam, "with usb 3 ports")
    let touch = useFilter(textParam, "touch id in keyboard")

    
    let some = (x) => {
        let nameT = x.map((n) => (
            <div key={n.id} className={s.parameter}>
                {n.name}:
            </div>
        ));
    
        let itemsT = x.map((c) =>
            c.items.map((c2) => (
                <div className={s.block} key={c2.id}>
                    {c2.value}
                </div>
            ))
        );
        console.log("itemsT", itemsT);

        return nameT, itemsT
    }

    console.log("i", some(capacity))

    let nameT = x.map((n) => (
        <div key={n.id} className={s.parameter}>
            {n.name}:
        </div>
    ));

    let itemsT = x.map((c) =>
        c.items.map((c2) => (
            <div className={s.block} key={c2.id}>
                {c2.value}
            </div>
        ))
    );
    console.log("itemsT", itemsT);

    return (
        <div>
            {x ? (
                <div>
                    <div>{nameT}</div>
                    <div>{itemsT}</div>
                </div>
            ) : null}

            {/* {nameT}{itemsT} */}
            {/* <div className={s.wrap}>{itemsT}</div> */}
        </div>
    );
};

export default TextParam;
