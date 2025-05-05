import { useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import { Transition } from '@headlessui/react'
import { dataObject } from '@/Pages/Rate/helper.js'
import { useEffect, useState } from 'react'
import { store, update } from '@actions/RateController.js'
import usePermissions from '@/Hooks/usePermissions.js'
import { permissions } from '@/Utils/permissions/index.js'

export default function Form({ getRates, rate = null }) {
    const { can } = usePermissions()

    const [action, setAction] = useState(store.route())
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))
    const [showSaveButton, setShowSaveButton] = useState(false)

    useEffect(() => {
        setAction(rate ? update.route({ rate: rate.id }) : store.route())
        setData(dataObject(rate))
        setShowSaveButton(rate ? can(permissions.rate.update) : can(permissions.rate.create))
    }, [rate])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!rate) {
                    reset('rate')
                }

                getRates()
            },
            onError: () => {},
        })
    }

    return (
        <form onSubmit={submit}>
            <div className="card mb-6 w-2/3">
                <div className="card-header">
                    <h5 className="card-title m-0 text-lg">Rate Details</h5>
                </div>
                <div className="card-body">
                    <div className="row g-5">
                        <div className="col-12 col-md-12">
                            <div className="form-floating form-floating-outline">
                                <TextInput
                                    type="file"
                                    value={data.name}
                                    onChange={(e) => setData('rate', e.target.files[0])}
                                    id="rate-file"
                                    placeholder="Rate File"
                                    required={true}
                                    isFocused={true}
                                    accept={'.xlsx'}
                                />
                                <InputLabel htmlFor="rate-file" required={true}>
                                    Rate File
                                </InputLabel>
                                <InputError className="mt-4" message={errors.rate} />
                            </div>
                        </div>
                    </div>
                    <a href={'/samples/rates.xlsx'} className={'float-end mt-8'}>Download sample.</a>
                </div>
            </div>

            {showSaveButton && (
                <div className="d-flex justify-content-end w-2/3 gap-4">
                    <button disabled={processing} className="btn btn-primary">
                        Save Changes
                    </button>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="mt-3 text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            )}
        </form>
    )
}
