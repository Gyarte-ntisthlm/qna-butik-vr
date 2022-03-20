import React, { useState } from 'react'
import '../form.css';

// Pages
import OtherInformation from './OtherInformation';
import Room from './Room';
import GeneralQuestions from './GeneralQuestions';
import { Button, Pagination } from '@mantine/core';
import GeneralQuestions2 from './GeneralQuestions2';


function Form() {

    const [page, setPage] = useState(1);

    // This array will be replaced by the prefixes taken from the database.
    const FormTitles = ["1st Room Evaluation", "2nd Room Evaluation", "3rd Room Evaluation", "Some General Questions", "More General Questions", "Other Information (Optional)"];


    const [formData, setFormData] = useState({
        order: "gui-int",
        interactiveRoom: {
            title: "The Interactive Room",
            description: "",
            rating: 0,
            text: "",
        },
        mixedRoom: {
            title: "MIXED ROOM",
            description: "",
            rating: 0,
            text: "",
        },
        guiRoom: {
            title: "GUI ROOM",
            description: "",
            rating: 0,
            text: "",
        },
        generalQuestions: {
            anyImprovements: "",
            howDoYouPlay: "",
        },
        generalQuestions2: {
            system: "",
            interactiveUsability: "",
            mixedUsability: "",
            guiUsability: "",
            preference: "",
            preferenceElaboration: "",
        },
        otherInformation: {
            age: "",
            nationality: "",
            okWithSharingOfFormData: false,
        }
    });


    const DisplayContent = () => {
        switch (page - 1) {
            case 0:
                return <Room form={formData} place={page - 1} setFormData={setFormData} />;
            case 1:
                return <Room form={formData} place={page - 1} setFormData={setFormData} />;
            case 2:
                return <Room form={formData} place={page - 1} setFormData={setFormData} />;
            case 3:
                return <GeneralQuestions />;
            case 4:
                return <GeneralQuestions2 />;
            case 5:
                return <OtherInformation />;
            default:
                return <h1>Error</h1>;
        }
    }

    return (
        <div>
            <div className='content'>
                <div className='form-container'>
                    <div className="form-content">
                    <div className='header'>
                        <h1>{FormTitles[page - 1]}</h1>
                        <hr />
                    </div>
                    <div className='form-content'>
                        {DisplayContent()}
                    </div>
                    </div>
                    <div className='form-navigation'>
                        <Button fullWidth onClick={() => { if(page === FormTitles.length) {alert("SUBMITTING"); console.log(formData)} else {setPage((current) => current + 1)} }}> {page === FormTitles.length ? "Submit" : "Next"} </Button>
                        <Pagination page={page} onChange={setPage} total={6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form