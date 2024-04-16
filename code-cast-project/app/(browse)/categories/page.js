import Link from 'next/link';
import styles from './CategoriesPage.module.css'; 
export default function CategoriesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explore Categories</h1>
      <div className={styles.categoryList}>
        <Link href="/categories/python">
          <div className={styles.category}>
            <img src="https://banner2.cleanpng.com/20190425/tej/kisspng-python-programming-language-computer-programming-c-how-to-learn-python-where-to-start-and-how-to-sta-5cc1bd894aba99.0676800815562008413061.jpg" alt="Python Icon" />
            <span>Python</span>
          </div>
        </Link>
        <Link href="/categories/java">
          <div className={styles.category}>
            <img src="https://icon2.cleanpng.com/20240214/yuk/transparent-javascript-icon-graphic-representation-of-java-with-orange-compute65cc6706839a69.4500095617078945345391.jpg" alt="Java Icon" />
            <span>Java</span>
          </div>
        </Link>
        <Link href="/categories/javascript">
          <div className={styles.category}>
            <img src="https://banner2.cleanpng.com/20180422/hrq/kisspng-javascript-web-development-logo-script-clipart-5adc4c1a932f97.7568863815243868426029.jpg" alt="JavaScript Icon" />
            <span>JavaScript</span>
          </div>
        </Link>
        <Link href="/categories/c-plus-plus">
          <div className={styles.category}>
            <img src="https://icon2.cleanpng.com/20190826/brg/transparent-c-plus-plus-icon-code-icon-coding-icon-5d6693bb880399.2168855515670035795571.jpg" alt="C++ Icon" />
            <span>C++</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
