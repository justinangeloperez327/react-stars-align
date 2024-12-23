import { Button, Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

import React from 'react'

const DeleteJobDialogBox = ({ isOpen, setIsOpen, deleteJob }) => {

    function close() {
        setIsOpen(false);
    }

    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">

                    <DialogPanel className="max-w-lg space-y-4 bg-white p-12  rounded-lg fade-up">
                        <DialogTitle className="font-bold">Delete Job</DialogTitle>
                        <Description>This will permanently delete the job</Description>
                        <p>Are you sure you want to delete this job?</p>
                        <div className="flex gap-4">
                            <Button onClick={close}>Cancel</Button>
                            <Button onClick={() => {
                                deleteJob();
                                close();
                            }}>Delete</Button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default DeleteJobDialogBox