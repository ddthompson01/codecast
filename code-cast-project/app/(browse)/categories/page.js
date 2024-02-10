import Button from "../_components/button/page";

export default function CategoriesPage() {
    return (
        <div>
            <div>
                Categories Page!
            </div>
            <div className="flex items-center justify-between">
                <Button href="/categories/python">Python</Button>
                <Button href="/categories/java">Java</Button>
                <Button href="/categories/javascript">JavaScript</Button>
                <Button href="/categories/c-plus-plus">C++</Button>
            </div>
        </div>
    )
}