import ArticleCard from './ArticleCard';

const mockArticles = [
  { id: 1, title: 'The Science of Resilience', excerpt: 'How our brains adapt to stress and what we can learn from neuroscience research.', readTime: '5 min' },
  { id: 2, title: 'Finding Peace in Uncertainty', excerpt: 'Practical strategies for navigating anxiety during transitional life periods.', readTime: '7 min' },
  { id: 3, title: 'Digital Wellness Guide', excerpt: 'Managing screen time and creating healthy boundaries with technology.', readTime: '4 min' },
];

export default function ArticleGrid({ articles = mockArticles }) {
  return (
    <div className="article-grid">
      {articles.map(article => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
}
