import {useEffect} from "react";
import photoStore from "@/store/photo";
import {Card, Col, Row} from "antd";
import {observer} from "mobx-react-lite";


const { Meta } = Card;

const App = observer(() => {

  useEffect(() => {
    photoStore.loadPhotos()
  }, [])

  const onScroll = () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    if (scrollHeight - (scrollTop + window.innerHeight) < 100 && !photoStore.loading) {
      photoStore.loadPhotos()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Row className="row-wrapper">
      <Col xs={20} sm={20} md={12} lg={12} xl={12}>
        <Row style={{justifyContent: "space-between"}}>
          {photoStore.photos.map((photo) => (
              <Col span={11}>
                <Card
                    hoverable
                    cover={<img alt="example" src={photo.url} />}
                    style={{marginBottom: 20}}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
});

export default App
