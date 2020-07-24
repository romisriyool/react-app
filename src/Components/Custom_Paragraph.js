import React from 'react';


class Custom_Paragraph extends React.Component {

    render() {

        // console.log(this.props.mt);

        return (
            <div style={{ marginTop: this.props.mt ? this.props.mt : "", marginBottom: this.props.mb ? this.props.mb : "" }}>

                <div className="elementor-element elementor-element-5d5a338 elementor-widget elementor-widget-text-editor"
                    data-id="5d5a338" data-element_type="widget"
                    data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                        <div
                            className="elementor-text-editor elementor-clearfix">
                            {
                                this.props.data ? 

                                    <p>{this.props.data}</p> : 

                                    <p>Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type
                                    and scrambled it to Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur
                                    aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui
                                    ratione voluptatem sequi nesciunt. Neque
                                    porro quisquam est, qui dolorem ipsum
                                    quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam
                                    eius modi tempora incidunt ut labore et
                                    dolore magnam aliquam quaerat
                                    voluptatem.Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi
                                    nesciunt. Neque porro quisquam est, qui
                                    dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia
                                    non numquam eius modi tempora incidunt
                                    ut labore et dolore magnam aliquam
                                    quaerat voluptatem.Lorem Ipsum is simply
                                    dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text
                                    ever since the 1500s, when an unknown
                                    printer took a galley of type and
                                    scrambled it to Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur
                                    aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui
                                    ratione voluptatem sequi nesciunt. Neque
                                    porro quisquam est, qui dolorem ipsum
                                    quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam
                                    eius modi tempora incidunt ut labore et
                                    dolore magnam aliquam quaerat
                                    voluptatem.Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi
                                    nesciunt. Neque porro quisquam est, qui
                                    dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia
                                    non numquam eius modi tempora incidunt
                                    ut labore et dolore magnam aliquam
                                    quaerat voluptatem.Lorem Ipsum is simply
                                    dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text
                                    ever since the 1500s, when an unknown
                                    printer took a galley of type and
                                    scrambled it to Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur
                                    aut odit aut fugi.</p>
                            }
                            
                        </div>
                    </div>
                </div>

            </div >
        )
    }

}

export default Custom_Paragraph;
