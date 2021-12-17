export const shortenAddress = (address: string) => {
    const partA = address.substring(0,5);
    const partB = address.substring(address.length -4,address.length -0 );
    return partA + "...." + partB;
}