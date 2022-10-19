import Image from 'next/image';

export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <Image
            src="/time-cat.jpg"
            alt="card__image"
            className="card__image"
            width="600"
            height="400"
          />
        </div>
        <div className="card__body">
          <span className="tags">{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className="card__footer">
          <div className="user">
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className="user__image"
              width="40"
              height="40"
            />
            <div className="user__info">
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;