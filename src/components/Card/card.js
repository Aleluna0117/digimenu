import React from "react";
import { Card, Accordion, Button, Media, Image } from "react-bootstrap";
import "./card.css";

function DishCard() {
  return (
    <div className="card-block">
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="1"
                id="card-heading"
              >
                CALDOS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Birria</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $40</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pancita</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pozole</p>
                      <p id="dish-content">Maczia, Surtida o Pollo</p>
                      <p id="dish-price"> $40</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="2"
                id="card-heading"
              >
                TOSTADAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pata</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tinga de Pollo Res</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="3"
                id="card-heading"
              >
                QUESADILLAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Chicharron Prensado</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Queso</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Champinones</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Tinga de Pollo o Res</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Papas con Chorizo</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Con Queso</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> +$5</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="4"
                id="card-heading"
              >
                FLAUTAS 4 PZAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pollo</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $75</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Res</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="5"
                id="card-heading"
              >
                ENCHILADAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Verdes o Rojas</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                  <hr />
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Pancita.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Mole</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $90</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="6"
                id="card-heading"
              >
                GORDITAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Chicharron</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="7"
                id="card-heading"
              >
                SOPES
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Friijol, crema y queso</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $28</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="8"
                id="card-heading"
              >
                *MILANESA
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pollo o Res</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="9"
                id="card-heading"
              >
                *CARNES
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Cecina</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $0</p>
                    </Media.Body>
                  </Media>
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Arrachera</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $100</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="10"
                id="card-heading"
              >
                *PAPA FRITA O ENSALADA
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                {/* <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Pollo o Res</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $80</p>
                    </Media.Body>
                  </Media>
                </ul> */}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="text"
                eventKey="11"
                id="card-heading"
              >
                BEBIDAS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                <ul className="list-unstyled">
                  <Media as="li" id="media-block">
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="./img/Birria.jpg"
                      alt="Generic placeholder"
                      rounded
                    />
                    <Media.Body>
                      <p id="dish-heading">Refresco</p>
                      <p id="dish-content">
                        A blend of chiles and spices simmered with beef stew
                        meat.
                      </p>
                      <p id="dish-price"> $20</p>
                    </Media.Body>
                  </Media>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default DishCard;