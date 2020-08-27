import React from "react";
import "./YelpCards.css";
import { Card, Icon, List, Image } from "semantic-ui-react";

export default function YelpParking(props) {
  return (
    <Card.Group className="Card-group" centered>
      {props.parking.map((business) => (
        <Card className="Card" key={business.id}>
          <Image className="Card-img" src={business.image_url} centered />
          <Card.Content>
            <Card.Header>{business.name}</Card.Header>
            <List className="Card-list">
              <List.Item>
                <Icon name="marker" />
                {`
                  ${business.location.display_address[0]}, 
                  ${business.location.display_address[1]}
                `}
              </List.Item>
              <List.Item>
                <Icon name="star" />
                {` ${business.rating} (${business.review_count} reviews) `}
              </List.Item>
              <List.Item>
                <Icon name="chart bar" />
                {` 
                ${(
                  (business.review_count * business.rating) /
                  (business.review_count + 1)
                ).toFixed(2)}
                `}
              </List.Item>
              <List.Item>
                <span>
                  <Icon name="linkify" />
                  <a
                    href={business.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {business.name}
                  </a>
                </span>
              </List.Item>
            </List>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
