/**
 * Join several selectors into one string, separated with " ";
 * Useful if using css modules and/or combination of css modules and selector strings.
 * 
 * @param sel1 selector name (class, id, tag etc)
 * @param sel2 selector name (class, id, tag etc)
 * @param sel3 selector name (class, id, tag etc)
 * @param sel4 selector name (class, id, tag etc)
 * @param sel5 selector name (class, id, tag etc)
 */
export function mix(sel1: string = "", sel2: string = "", sel3: string = "", sel4: string = "", sel5: string = "") {
    let stringArray = new Array<string>();

    stringArray.push("");
    stringArray.push(sel1);

    if (sel2 != "") stringArray.push(sel2);
    if (sel3 != "") stringArray.push(sel3);
    if (sel4 != "") stringArray.push(sel4);
    if (sel5 != "") stringArray.push(sel5);

    stringArray.push("");

    return stringArray.join(" ");
}

/**
 * Join several animations into one string, separated with " ";
 * Useful if using css modules and/or combination of css modules and selector strings.
 * 
 * @param sel1 animation type
 * @param sel2 animation type
 * @param sel3 animation type
 * @param sel4 animation type
 * @param sel5 animation type
 */
export function anim(anim1: string = "", anim2: string = "", anim3: string = "", anim4: string = "", anim5: string = "") {
    return " animated" + mix(anim1, anim2, anim3, anim4, anim5);
}
