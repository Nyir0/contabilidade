import "../components/Article.css";
import Articles from "../data/Articles.js";

export default function Article(){
    const DataArticles = Articles.map((article, index) => (
        <section>
            <img className="w-full" src={article.img} alt="" />
            <div className="bg-[var(--yellow-base)] p-5">
                <p className="text-center">
                {article.text}
                </p>
            </div>
        </section>
    ))

    return(
        <>
        <section id="articles" className="mt-28 max-md:mt-5">
            <div className="flex w-full justify-between items-end">
                <h2>Artigos</h2>
                <span id="all-articles">Ver todos</span>
            </div>
            <div className="card">
                {DataArticles}
            </div>
        </section>
        </>
    )
}