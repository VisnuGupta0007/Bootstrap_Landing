
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <>
            <section id='Beach'>
                <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
                    <h1 style={{ textAlign: 'center' }}>Beaches</h1>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginLeft: '5rem', marginRight: '5rem' }}>


                        {/* Card 1 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_3_l_666_1000.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Goa</Card.Title>
                                <Card.Text>
                                    Goa is India’s beach paradise, known for its vibrant nightlife, beautiful beaches, Portuguese heritage, seafood, water sports, festivals, and relaxed vibe, attracting tourists worldwide year-round.
                                </Card.Text>

                            </Card.Body>
                        </Card>

                        {/* Card 2 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Digha_tv_destination_img_2_l_736_1256.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Digha</Card.Title>
                                <Card.Text>
                                    Dugha Beach is a peaceful coastal spot known for clean sandy shores, calm waters, scenic sunsets, local seafood stalls, and a relaxing atmosphere, ideal for nature lovers and quiet beach walks.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                        {/* Card 3 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Lakshadweep</Card.Title>
                                <Card.Text>
                                    Lakshadweep beaches are pristine with white sands, clear turquoise waters, vibrant coral reefs, perfect for snorkeling, diving, and relaxing. They offer serene beauty, marine life, and peaceful island vibes.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                    <div style={{ display: 'flex', gap: '4.5rem', marginLeft: '5rem', marginRight: '5rem', marginTop: '2rem' }}>

                        {/* Card 4 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Alibaug_tv_destination_img_6_l_963_1712.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Alibaug</Card.Title>
                                <Card.Text>
                                    Alibaug Beach features black sand, Kolaba Fort nearby, water sports, calm waters, and stunning sunsets. It’s a popular, easily accessible weekend getaway from Mumbai with scenic coastal beauty.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                        {/* Card 5 */}
                        <Card className='card-hover'>
                            <Card.Img variant="top" src="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_havelock_tv_destination_img_2_l_631_948.jpg" style={{ padding: '25px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Havelock Island</Card.Title>
                                <Card.Text>
                                    Havelock Island boasts pristine white beaches, clear blue waters, top snorkeling and diving, vibrant coral reefs, serene nature, famous Radhanagar Beach, and best visits from October to May.
                                </Card.Text>

                            </Card.Body>
                        </Card>


                    </div>

                </div>
            </section>
        </>
    );
}

export default BasicExample;