import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import BoxItem from "./varietyGameBoxItem";
import { nanoid } from "nanoid";

export default function Box(props) {
    const { targetKey } = props;
    const [items, setItems] = useState([]);

    const handleDrop = (e) => {
        console.log("handleDrop ", e);
        const newItem = { label: e.dragData.label, uid: nanoid() };
        const newItems = [...items];
        newItems.splice(items.length, 0, newItem);
        setItems(newItems);
        e.containerElem.style.visibility = "hidden";
    };

    const swap = (fromIndex, toIndex, dragData) => {
        console.log("swap ", dragData, fromIndex, toIndex);

        const newItem = { label: dragData.label, uid: nanoid() };
        const newItems = [...items];
        newItems.splice(toIndex, 0, newItem);
        setItems(newItems);
    };

    const kill = (uid) => {
        console.log("kill ", uid);
        const newItems = [...items];
        items.map((item, index) => {
            if (item.uid == uid) {
                newItems.splice(index, 1);
            }
        });

        setItems(newItems);
    };

    return (
        <div className="component_box" style={{ marginLeft: 50 }}>
            <DropTarget
                onHit={handleDrop}
                targetKey={targetKey}
                dropData={{ name: props.name }}
            >
                <DropTarget
                    onHit={handleDrop}
                    targetKey="boxItem"
                    dropData={{ name: props.name }}
                >
                    <div className="box" style={{ width: 400, height: 500 }}>
                        {console.log("items ", items)}
                        {items.map((item, index) => {
                            return (
                                <BoxItem
                                    key={item.uid}
                                    uid={item.uid}
                                    kill={kill}
                                    index={index}
                                    swap={swap}
                                    label={item.label}
                                >
                                    {item.label}
                                </BoxItem>
                            );
                        })}
                    </div>
                </DropTarget>
            </DropTarget>
        </div >
    );
}
