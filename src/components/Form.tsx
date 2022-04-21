import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import '../form.css';
import { getData, updateData, login, globalUser } from '../firebase'

import { Buffer } from 'buffer';

import { Button, Pagination, Skeleton } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

// Pages
import OtherInformation from './OtherInformation';
import Room from './Room';
import GeneralQuestions from './GeneralQuestions';
import GeneralQuestions2 from './GeneralQuestions2';
import { Check, X } from 'tabler-icons-react';


function Form() {
    const notifications = useNotifications();
    const navigate = useNavigate();
    
    const [page, setPage] = useState(1);
    const [intiLoading, setInitLoading] = useState(true);

    const FormTitles = ["1st Room Evaluation", "2nd Room Evaluation", "3rd Room Evaluation", "Some General Questions", "More General Questions", "Other Information (Optional)"];
    const [formData, setFormData] = useState({
        order: "gui-int",
        Interactive: {
            title: "The Interactive / Realistic Room",
            description: "",
            rating: 0,
            text: "",
        },
        Mixed: {
            title: "The Mixed Room",
            description: "",
            rating: 0,
            text: "",
        },
        GUI: {
            title: "The GUI / Billboard Room",
            description: "",
            rating: 0,
            text: "",
        },
        generalQuestions: {
            anyImprovements: "",
            howDoYouPlay: "",
            experience: "Veteran",
        },
        generalQuestions2: {
            system: "interactive",
            interactiveUsability: "yes",
            mixedUsability: "yes",
            guiUsability: "yes",
            preference: "interactive",
            preferenceElaboration: "",
        },
        otherInformation: {
            age: "",
            region: "",
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
                return <GeneralQuestions2 props={formData} setFormData={setFormData} />;
            case 4:
                return <GeneralQuestions props={formData} form={formData} setFormData={setFormData} />;
            case 5:
                return <OtherInformation props={formData} setFormData={setFormData} />;
            default:
                return <h1>Error</h1>;
        }
    }

    const { id, secret } = useParams();

    const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary')

    useEffect(() => {

        // Show the mantine loading notification
        notifications.showNotification({
            id: 'loadingData',
            title: 'Loading data...',
            message: 'Fetching data from Butik VR.',
            loading: true,
            disallowClose: true,
        })

        // parse the id and secret from the url using react-router. 
        // decode it using the base64 library
        if (!id || !secret) {
            notifications.showNotification({
                id: 'error',
                title: 'Error',
                message: 'No id or secret found in url.',
                color: 'red',
                icon: 'times',
            })
            return;
        }

        const parsedID = decode(id);
        const parsedSecret = decode(secret);

        // login into firebase using the credentials from the url
        // get the user's data from firebase
        login(parsedID, parsedSecret).then((user:any) => {
            getData(globalUser).then((data) => {
                
                if(data === undefined) throw new Error("No data found")
    
                setFormData({
                    ...formData,
                    order: data.order,
                    Interactive: {
                        ...formData.Interactive,
                        rating: data.collectedData.Interactive.Rating,
                    },
                    Mixed: {
                        ...formData.Mixed,
                        rating: data.collectedData.Mixed.Rating,
                    },
                    GUI: {
                        ...formData.GUI,
                        rating: data.collectedData.GUI.Rating,
                    }
                });

                // Hide the mantine loading notification
                // Remove the skeleton animation
                setInitLoading(false);
                notifications.hideNotification('loadingData');
            })
            .catch(err => {
                notifications.showNotification({
                    title: 'Error',
                    icon: <X size={18} />,
                    message: err.message + " " + err.code,
                    autoClose: false,
                    color: 'red'
                });
            });
        }).catch(err => {

            // Show the mantine error notification
            notifications.showNotification({
                id: 'error',
                title: 'Error',
                icon: <X size={18} />,
                message: err.message + " " + err.code,
                color: 'red',
            })
            notifications.hideNotification('loadingData');
        });
    }, []);

    const handleSubmit = () => {

        const tempData = { form: { ...formData } };

        // TODO: Show the mantine uploading notification
        notifications.showNotification({
            id: 'uploadingData',
            title: 'Uploading data...',
            message: 'Uploading data to Butik VR.',
            loading: true,
            disallowClose: true,
        })

        updateData(globalUser, tempData).then(() => {
            // TODO: redirect to the thank you page and
            // TODO: Show the mantine success notification
            notifications.showNotification({
                id: 'success',
                title: 'Success',
                message: 'Data uploaded to Butik VR.',
                color: 'green',
                autoClose: 50000,
                icon: <Check size={18} />,
            })

            notifications.hideNotification('uploadingData');

            // Change the page to the thank you page
            navigate("/thank-you");
            

        }).catch(err => {
            // Show the mantine error notification
            notifications.showNotification({
                id: 'error',
                title: 'Error',
                icon: <X size={18} />,
                message: 'Failed to upload data to Butik VR.',
                color: 'red',
            })

            notifications.hideNotification('uploadingData');
        });
    }

    return (
        <>
            <div className='content'>
                <Skeleton visible={intiLoading} className='form-container'>
                    <div className="form-content">
                        <div className='header'>
                            <h1>{FormTitles[page - 1]}</h1>
                        </div>
                        <div className='form-content'>
                            {DisplayContent()}
                        </div>
                    </div>
                    <div className='form-navigation'>
                        <Button fullWidth onClick={() => { if (page === FormTitles.length) { handleSubmit(); } else { setPage((current) => current + 1) } }}> {page === FormTitles.length ? "Submit" : "Next"} </Button>
                        <Pagination page={page} onChange={setPage} total={6} />
                    </div>
                </Skeleton>
            </div>
        </>
    )
}

export default Form;