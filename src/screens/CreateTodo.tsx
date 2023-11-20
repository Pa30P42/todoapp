import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Unknown/Layout';
import StyledTextInput from '../components/Unknown/StyledTextInput';
import Categories from '../components/Categories';
import DatePicker from '../components/Unknown/DatePicker';
import StyledButton from '../components/Unknown/StyledButton';
import {FormValues} from '../types/form';
import useForms from '../hooks/useForms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  category: Yup.string().required('Category is required'),
  date: Yup.string(),
  time: Yup.string(),
  notes: Yup.string(),
});

const initialValues: FormValues = {
  title: '',
  category: 'task',
  date: '',
  time: '',
  notes: '',
};

const CreateTodo: React.FC = () => {
  const {handleCreateTodo, handleCategoryPress, handlePickDatetime} =
    useForms();

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleCreateTodo}>
        {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
          <>
            <View className="flex-1 justify-between">
              <View className="px- py-6">
                <StyledTextInput
                  name="title"
                  error={errors.title || ''}
                  value={values.title}
                  onTextChange={handleChange('title')}
                  label="Task Title"
                />
                <Categories
                  name="category"
                  selectedCategories={[values.category]}
                  onCategoryPress={category =>
                    handleCategoryPress(category, setFieldValue)
                  }
                  containerClassName="mb-6"
                />
                <View className="flex-row mb-6">
                  <DatePicker
                    value={values.date}
                    onDatePicked={date =>
                      handlePickDatetime('date', date, setFieldValue)
                    }
                    name="date"
                    containerStyles="mr-4"
                  />
                  <DatePicker
                    value={values.time}
                    onDatePicked={time =>
                      handlePickDatetime('time', time, setFieldValue)
                    }
                    name="time"
                    type="time"
                  />
                </View>
                <StyledTextInput
                  name="notes"
                  placeholder="Notes"
                  label="Notes"
                  value={values.notes}
                  onTextChange={handleChange('notes')}
                  multiline={true}
                  inputClassName="h-[180]"
                />
              </View>
            </View>
            <StyledButton onPress={handleSubmit} title="Save" />
          </>
        )}
      </Formik>
    </Layout>
  );
};

export default CreateTodo;
