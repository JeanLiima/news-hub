import { useState } from "react";

type FilterFormValues = {
    source?: string;
    date?: string;
}

type FilterFormProps = {
    onSubmit: (values: FilterFormValues) => void;
}

export const FilterForm = ({ onSubmit }: FilterFormProps) => {
    const [inputSource, setInputSource] = useState('');
    const [inputDate, setInputDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            source: inputSource.trim() || undefined,
            date: inputDate || undefined,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex flex-col w-full sm:w-1/3">
                <label htmlFor="source" className="mb-1 font-semibold text-secondary">
                    Filtrar por fonte
                </label>
                <input
                    id="source"
                    type="text"
                    value={inputSource}
                    onChange={e => setInputSource(e.target.value)}
                    placeholder="ex: techcrunch, wsj.com"
                    className="border border-border rounded px-3 py-2 w-full bg-card-bg text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{
                        backgroundColor: 'var(--color-card-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                    }}
                />
            </div>

            <div className="flex flex-col w-full sm:w-1/3">
                <label htmlFor="date" className="mb-1 font-semibold text-secondary">
                    Filtrar por data
                </label>
                <input
                    id="date"
                    type="date"
                    value={inputDate}
                    onChange={e => setInputDate(e.target.value)}
                    className="border border-border rounded px-3 py-2 w-full bg-card-bg text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{
                        backgroundColor: 'var(--color-card-bg)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                    }}
                />
            </div>

            <button
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-2 rounded transition cursor-pointer"
                style={{ backgroundColor: 'var(--color-primary)' }}
            >
                Aplicar filtros
            </button>
        </form>
    )
};