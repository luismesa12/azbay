import BtnCategories from "./BtnCategories"

const Categories = ({filterProducts, setFilter}) => {
    
    const categoryAAA = JSON.parse(JSON.stringify(filterProducts))
    categoryAAA.map(e=>{
        e.filterCategory = true
        if (e.category!=='AAA') {
            e.filterCategory = false
        }
    });
    const categoryBBB = JSON.parse(JSON.stringify(filterProducts))
    categoryBBB.map(e=>{
        e.filterCategory = true
        if (e.category!=='BBB') {
            e.filterCategory = false
        }
    });
    const categoryCCC = JSON.parse(JSON.stringify(filterProducts))
    categoryCCC.map(e=>{
        e.filterCategory = true
        if (e.category!=='CCC') {
            e.filterCategory = false
        }
    });
    const categoryAll = JSON.parse(JSON.stringify(filterProducts))
    categoryAll.map(e=>{
           return e.filterCategory = true
    });

    const cAll = () => setFilter(categoryAll);
    const cAAA = () => setFilter(categoryAAA);
    const cBBB = () => setFilter(categoryBBB);
    const cCCC = () => setFilter(categoryCCC);

    return (
        <>
            <BtnCategories {...{cAll,cAAA,cBBB,cCCC}}/>
        </>
    )
}

export default Categories;
