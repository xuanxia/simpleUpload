export default (props) => {
    const {value, downloadServerHost} = props;

    if(Array.isArray(value) && value.length){
        return value.map((item) => {
            return {
                key: item,
                url: `${downloadServerHost}/${item}`,
                thumbnail: `${downloadServerHost}/${item}${props.thumbnail}`,
            };
        });
    }
    return [];
};